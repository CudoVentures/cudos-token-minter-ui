import { Box, Grid, Typography } from '@mui/material'
import { COLORS_DARK_THEME } from 'theme/colors'
import { FOOTER } from 'utils/constants'
import { styles } from './styles'
import { useLowerResCheck, useLowResCheck } from 'utils/CustomHooks/screenChecks'

const Footer = () => {

  const isLowRes = useLowResCheck()
  const isLowerRes = useLowerResCheck()

  return (
    <Box sx={styles.footerContainer} flexDirection={isLowRes ? 'column' : 'row'} gap={1}>
      <Box display="flex">
        {FOOTER.LEFT_LINKS.map((link) => (
          <Grid
            item
            key={link.text}
            sx={({ palette }) => ({
              padding: `0 0.5rem`,
              '&:not(:last-child)': {
                borderRight: `1px solid ${palette.text.secondary}`
              },
              cursor: 'pointer'
            })}
            onClick={() => window.open(link.url, '_blank')?.focus()}
          >
            <Typography
              sx={{
                "&:hover": {
                  color: COLORS_DARK_THEME.PRIMARY_BLUE
                }
              }}
              color="text.secondary"
              fontSize={isLowerRes ? "0.5rem" : "0.8rem"}
              fontWeight={500}
            >
              {link.text}
            </Typography>
          </Grid>
        ))}
      </Box>
      <Box
        alignItems="center"
        display="flex"
        gap={3}
        sx={{ marginLeft: isLowRes ? 'none' : 'auto' }}
      >
        {FOOTER.RIGHT_LINKS.map((link) => (
          <Grid
            key={link.url}
            onClick={() => window.open(link.url, '_blank')?.focus()}
            sx={({ palette }) => ({
              cursor: 'pointer',
              color: palette.text.secondary,
              '&:hover': {
                color: palette.primary.main
              }
            })}
          >
            {link.icon}
          </Grid>
        ))}
      </Box>
    </Box>
  )
}

export default Footer
