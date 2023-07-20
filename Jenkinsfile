pipeline {
  agent {
    kubernetes {
      yaml '''
        apiVersion: v1
        kind: Pod
        spec:
          containers:
          - name: docker
            image: docker:24.0.2-dind
            securityContext:
              privileged: true
          - name: tools
            image: nexus.tool.mddinternship.com/custom-ubuntu:1.0.2
            tty: true
            securityContext:
              privileged: true
        '''
    }
  }
  stages {
  stage('SonarQube Analysis') {
    when {
        expression {
        BRANCH_NAME = 'main'
        }
      }
      steps {
        echo "----------------------------------------------------------SonarQube Analysis---------------------------------------------------------"
        container('tools') {
          script {
            git credentialsId: 'pstahi_gitlab', url: 'https://gitlab.tool.mddinternship.com/book-sharing/ui.git', branch:'main'
            sh '''
              npm install -g sonarqube-scanner
            '''
            sh '''
              npm install
              sonar-scanner -Dsonar.projectKey=book-sharing-test-front -Dsonar.sources=./src -Dsonar.host.url=https://sonarqube.tool.mddinternship.com -Dsonar.login=sqa_16c593742955dd7e6f98a33a3f29a09dcd8df9d8
            '''
          }
        }
      }
    }
    stage('Build image') {
      when {
          expression {
          BRANCH_NAME = 'main'
          }
        }
        steps {
          container('docker') {
            script {
              // dir('docker') {
                git credentialsId: 'pstahi_gitlab', url: 'https://gitlab.tool.mddinternship.com/book-sharing/ui.git', branch:'main'
              // }
              // sh "mv ${WORKSPACE}/docker/Dockerfile ./Dockerfile"
              // sh "mv ${WORKSPACE}/docker/nginx/ ./nginx/"
              env.VERSION = "${BUILD_NUMBER}"
              sh "echo ${VERSION}"
              dockerImage = docker.build("book-sharing-front:${env.VERSION}")
              sh "echo ${env.BUILD_NUMBER}"
            }
          }
        }
      }


    stage('Push to Nexus') {
      when {
          expression {
          BRANCH_NAME = 'main'
          }
        }
        steps {
          container('docker') {
            script {
              // dir('docker'){
              docker.withRegistry('https://nexus.tool.mddinternship.com', 'nexus-jenkins') {
                dockerImage.push("${env.VERSION}")
                dockerImage.push("latest") 
               }
              // }
            }
          }
        }
      }

    stage('AWS cluster') {
      when {
          expression {
          BRANCH_NAME = 'main'
          }
        }
        steps {
          container('tools') {
            // dir('docker'){
            withAWS(credentials: 'pstahi-aws-cred', region: 'eu-central-1') {
              sh 'aws eks update-kubeconfig --region eu-central-1 --name internship-eks'
              sh 'kubectl config set-context --current --namespace=book-sharing'
              withCredentials([usernamePassword(credentialsId: 'nexus-jenkins', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
              sh 'echo $VERSION'
              // sh 'helm upgrade -i book-sharing-chart ./book-sharing/ --namespace book-sharing --create-namespace -f ./book-sharing/values.yaml --set version=$VERSION'
              sh 'helm upgrade -i book-sharing-front ./book-sharing-front/ --namespace book-sharing --create-namespace -f ./book-sharing-front/values.yaml'
                }
              }
            // }
            }
          }
        }
      }
    }