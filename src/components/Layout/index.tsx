import { Box } from '@mui/material'
import Footer from './Footer'
import Header from './Header'
import { styles } from './styles'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <Box style={styles.layoutholder}>
      <Header />
      <Box sx={styles.childrenHolder}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
