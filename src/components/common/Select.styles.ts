export const selectStyles = (border?: boolean) => ({
  control: (baseStyles: any) => ({
    ...baseStyles,
    fontSize: '14px',
    // border: border ? 'red' : 'none',
    border: border ? '1px solid #de6b67' : 'none',
    fontWeight: '400',
    paddingLeft: '13px',
    boxShadow: 'none',
    transition: '0.2s',
    backgroundColor: '#f7f7f7',
    borderRadius: 'none',
    '&:hover': {
      backgroundColor: '#D1D1D1',
      border: 'none',
    },
    '&:focus': {
      background: '#F6F6F6',
      boxShadow: '0px 0px 5px #D9D9D9',
      border: 'none',
    },
    cursor: 'pointer',
  }),
  option: (baseStyles: any, state: any) => ({
    ...baseStyles,
    cursor: 'pointer',
    backgroundColor: state.isSelected ? '#C60E2E' : 'white',
    fontWeight: '500',
    color: state.isSelected ? 'white' : '#9C9C9C',
    transition: '0.2s',
    '&:hover': {
      backgroundColor: '#FF768E',
      color: 'white',
    },
  }),
  dropdownIndicator: (baseStyles: any) => ({
    ...baseStyles,
    color: 'inherit',
  }),
  loadingIndicator: (baseStyles: any) => ({
    ...baseStyles,
    color: 'inherit',
  }),
  clearIndicator: (baseStyles: any) => ({
    ...baseStyles,
    color: 'inherit',
  }),
  valueContainer: (baseStyles: any) => ({
    ...baseStyles,
    flexWrap: 'nowrap',
  }),
  multiValue: (baseStyles: any) => ({
    ...baseStyles,
    backgroundColor: 'black',
    borderRadius: '4px',
    color: 'white',
    minWidth: '25%',
    display: 'flex',
    justifyContent: 'space-between',
  }),
  multiValueLabel: (baseStyles: any) => ({
    ...baseStyles,
    color: 'white',
    fontSize: '15px',
    lineHeight: '19px',
    fontFamily: 'Avenir, sans-serif',
  }),
  multiValueRemove: (baseStyles: any) => ({
    ...baseStyles,
  }),
});
