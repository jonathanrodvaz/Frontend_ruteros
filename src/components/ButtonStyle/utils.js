export const getVariants = (theme, variant) => {
  switch (variant) {
    case 'header':
      return getHeaderVariant(theme);
    case 'small':
      return getSmallVariant(theme);
    case 'large':
      return getLargeVariant(theme);
    case 'extralarge':
      return getExtralargeVariant(theme);
    case 'medium':
    default:
      return getMediumVariant(theme);
  }
};

const getHeaderVariant = (theme) => ({
  // width: theme.spacing(18.7),
  // height: theme.spacing(18),
  width: theme.spacing(10.5),
  backgroundColor: theme.palette.button.background.mainColor,
  color: theme.palette.button.text.fourth,
  border: theme.palette.button.border.transparent,
  // borderRadius: theme.spacing(2.5),
  // border: `${theme.spacing(0.35)} solid ${theme.palette.border.main}`,
});

const getSmallVariant = (theme) => {
  console.log('getSmallVariant -> theme: ', theme);

  return {
    width: theme.spacing(18.12),
    height: theme.spacing(4.87),
    backgroundColor: theme.palette.button.background.accent,
    color: theme.palette.button.text.color,
    border: theme.palette.button.border.transparent,
    borderRadius: theme.spacing(2.5),
    fontSize: theme.spacing(2),
    '&:hover': {
      backgroundColor: 'rgb(250, 250, 250)',
      color: '#25d366',
      borderBottom: '1.5px  solid #25d366',
      fontSize: '18px',
    },
  };
};

// const getMediumVariant = (theme) => ({
//   width: theme.spacing(18.7),
//   height: theme.spacing(18),
//   backgroundColor: theme.palette.button.background.accent,
//   border: `${theme.spacing(0.35)} solid ${theme.palette.border.main}`,
//   borderRadius: theme.spacing(2.5),
// });

const getMediumVariant = (theme) => ({
  width: theme.spacing(18.7),
  height: theme.spacing(18),
  backgroundColor: theme.palette.button.background.accent,
  border: theme.palette.button.border.transparent,
  borderRadius: theme.spacing(2.5),
});

// const getLargeVariant = (theme) => ({
//   width: theme.spacing(25),
//   height: theme.spacing(15),
//   backgroundColor: theme.palette.button.background.error,
//   border: `${theme.spacing(0.35)} solid ${theme.palette.border.main}`,
//   borderRadius: theme.spacing(2.5),
// });

const getLargeVariant = (theme) => ({
  width: theme.spacing(25),
  height: theme.spacing(20),
  backgroundColor: theme.palette.button.background.accent,
  border: theme.palette.button.border.transparent,
  borderRadius: theme.spacing(2.5),
});

// const getExtralargeVariant = (theme) => ({
//   width: theme.spacing(31.2),
//   backgroundColor: theme.palette.button.background.error,
//   border: `${theme.spacing(0.35)} solid ${theme.palette.border.main}`,
//   borderRadius: theme.spacing(2.5),
// });

const getExtralargeVariant = (theme) => ({
  width: theme.spacing(31.2),
  height: theme.spacing(20),
  backgroundColor: theme.palette.button.background.accent,
  border: theme.palette.button.border.transparent,
  borderRadius: theme.spacing(2.5),
});
