import { createUseStyles } from 'react-jss';

export default createUseStyles({
  CardLink: (props) => ({
    borderColor: props.primaryColor,
    color: props.primaryColor,
    '&:hover': {
      backgroundColor: props.primaryColor,
      color: props.secondaryColor,
    },
    '&:active': {
      '--tw-ring-color': props.primaryColor,
    },
  }),
});
