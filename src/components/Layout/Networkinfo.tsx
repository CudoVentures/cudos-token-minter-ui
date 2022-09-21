import { useState } from 'react'
import { StyledNetwork, styles } from './styles'
import ArrowIcon from 'assets/vectors/arrow-down.svg'
import { CHAIN_DETAILS, CHAIN_ID } from 'utils/constants'
import { COLORS_DARK_THEME } from 'theme/colors'
import globusIcon from 'assets/vectors/globus-icon.svg'
import grayGlobusIcon from 'assets/vectors/gray-globus-icon.svg'
import { OpenInNewRounded as OpenInNewRoundedIcon } from '@mui/icons-material'
import { Typography, Box, Collapse } from '@mui/material'
import { chainIDToAlias } from 'utils/helpers'

const NetworkInfo = () => {

  const networksToDisplayInMenu = [CHAIN_DETAILS.PUBLIC, CHAIN_DETAILS.MAINNET]
  const aliasChainName = chainIDToAlias(CHAIN_ID)
  const [open, setOpen] = useState(false)

  return (
    <StyledNetwork>
      <Box onClick={() => setOpen(!open)} style={styles.userContainer}>
        <Box style={styles.userInnerContainer}>
          <img style={{ marginRight: '10px' }} src={globusIcon} alt="globus-icon" />
          <Typography>
            {aliasChainName}
          </Typography>
          <Box style={{ marginLeft: '15px' }}>
            <img
              style={{
                cursor: 'pointer',
                transform: open ? 'rotate(180deg)' : 'rotate(360deg)'
              }}
              src={ArrowIcon}
              alt="Arrow Icon"
            />
          </Box>
        </Box>
      </Box>
      <Collapse
        onMouseLeave={() => setOpen(false)}
        style={{ marginTop: '-28px', zIndex: '-1' }}
        in={open}
      >
        <Box gap={3} style={styles.networkSelectionMenuContainer}>
          {networksToDisplayInMenu.map((NETWORK, idx) => {
            const [hovered, setHovered] = useState<boolean>(false)

            return (
              aliasChainName !== NETWORK.ALIAS_NAME ?
                <Box key={idx} onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>
                  <a style={styles.anchorStyle} href={NETWORK.LINK}>
                    <img
                      style={{ marginRight: '10px' }}
                      src={hovered ? globusIcon : grayGlobusIcon}
                      alt="globus-icon"
                    />
                    <Typography
                      color={hovered ? COLORS_DARK_THEME.PRIMARY_BLUE : COLORS_DARK_THEME.SECONDARY_TEXT}>
                      {NETWORK.ALIAS_NAME}
                    </Typography>
                    <OpenInNewRoundedIcon
                      style={{ marginLeft: '5px' }}
                      fontSize="inherit"
                      color={hovered ? 'primary' : 'disabled'}
                    />
                  </a>
                </Box>
                : null
            )
          })}
        </Box>
      </Collapse>
    </StyledNetwork>
  )
}

export default NetworkInfo
