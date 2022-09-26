import { Box, Grid, Typography } from '@mui/material'
import { COLORS_DARK_THEME } from 'theme/colors'
import { FOOTER_LINKS } from 'utils/constants'
import { styles } from './styles'

const Footer = () => {
  return (
    <Box sx={styles.footerContainer} gap={6}>
      <Box display="flex" alignItems="center">
        {FOOTER_LINKS.map((link) => (
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
              fontSize="0.8rem"
              fontWeight={500}
            >
              {link.text}
            </Typography>
          </Grid>
        ))}
      </Box>
    </Box>
  )
}

export default Footer