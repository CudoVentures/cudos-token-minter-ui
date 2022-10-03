/* eslint-disable import/prefer-default-export */
export const styles = {
  footerHolder: {
    width: '100%',
    position: 'absolute',
    display: 'flex',
    bottom: 0
  },
  connectContainer: {
    display: 'grid',
    alignContent: 'center',
    justifyContent: 'center',
    justifyItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '30%',
    transform: 'translate(-50%, -50%)',
  },
  startMintingBtn: {
    width: '190px',
    fontWeight: 700
  },
  codelesslyHolder: {
    marginLeft: '5px',
    fontWeight: '900'
  },
} as const