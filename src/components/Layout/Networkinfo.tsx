import { useState } from 'react'
import { StyledNetwork, styles } from './styles'
import { ReactComponent as ArrowIcon } from 'assets/vectors/arrow-down.svg'
import { CHAIN_DETAILS } from 'utils/constants'
import { COLORS_DARK_THEME } from 'theme/colors'
import globusIcon from 'assets/vectors/globus-icon.svg'
import grayGlobusIcon from 'assets/vectors/gray-globus-icon.svg'
import { Typography, Box, Collapse } from '@mui/material'
import { chainIDToAlias, handleAvailableNetworks } from 'utils/helpers'
import { RootState } from 'store'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from 'store/user'

export const networksToDisplayInMenu = handleAvailableNetworks(CHAIN_DETAILS.DEFAULT_NETWORK)

const NetworkLinkComponent = ({ network, setChosenNetwork }: {
  network: networkToDisplay,
  setChosenNetwork: (selectedNetwork: string) => void
}): JSX.Element => {

  const [hovered, setHovered] = useState<boolean>(false)

  return (
    <Box
      style={styles.anchorStyle}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      onClick={() => setChosenNetwork(network.SHORT_NAMES[0].toUpperCase())}
    >
      <img
        style={{ marginRight: '10px' }}
        src={hovered ? globusIcon : grayGlobusIcon}
        alt="globus-icon"
      />
      <Typography
        color={
          hovered ? COLORS_DARK_THEME.PRIMARY_BLUE :
            COLORS_DARK_THEME.SECONDARY_TEXT
        }>
        {network.ALIAS_NAME}
      </Typography>
    </Box>
  )
}

const NetworkInfo = ({ componentStyle }: { componentStyle: 'menu' | 'nav' }) => {

  const dispatch = useDispatch()
  const [open, setOpen] = useState<boolean>(false)
  const { chosenNetwork, address } = useSelector((state: RootState) => state.userState)
  const aliasChainName = chainIDToAlias(CHAIN_DETAILS.CHAIN_ID[chosenNetwork!])

  const setChosenNetwork = (selectedNetwork: string) => {
    dispatch(updateUser({ chosenNetwork: selectedNetwork }))
    setOpen(false)
  }
  const disabledDropDown = !address
  const collapsable = networksToDisplayInMenu.length > 1
  const isMenu = componentStyle === 'menu'

  return (

    <StyledNetwork sx={
      !collapsable || disabledDropDown ? {} : { cursor: 'pointer' }}>
      <Box
        borderRadius={isMenu ? 3 : 5}
        onClick={!collapsable || disabledDropDown ? () => { } : () => setOpen(!open)}
        style={styles.userContainer}
      >
        <Box style={styles.userInnerContainer}>
          <Box style={{ display: 'flex' }}>
            <img style={{ marginRight: '10px' }}
              src={disabledDropDown ? grayGlobusIcon : globusIcon}
              alt="globus-icon"
            />
            {!disabledDropDown ? <Typography> {aliasChainName} </Typography> :
              <Typography variant={'subtitle2'} color={'text.secondary'}>
                You need to connect your wallet in order to select a Deployment Network
              </Typography>}
          </Box>
          {collapsable ?
            <Box style={{ marginLeft: '25px' }}>
              <ArrowIcon style={{ color: disabledDropDown ? 'gray' : 'inherit', transform: open ? 'rotate(180deg)' : 'rotate(360deg)' }} />
            </Box> : null}
        </Box>
      </Box>
      <Collapse
        onMouseLeave={() => setOpen(false)}
        style={{ marginTop: '-28px', zIndex: '-1' }}
        in={open}
      >
        <Box gap={3} style={styles.networkSelectionMenuContainer}>
          {networksToDisplayInMenu.map((NETWORK, idx) => {
            return aliasChainName !== NETWORK.ALIAS_NAME ?
              <NetworkLinkComponent key={idx} network={NETWORK} setChosenNetwork={setChosenNetwork} /> : null
          })}
        </Box>
      </Collapse>
    </StyledNetwork>
  )
}

export default NetworkInfo
