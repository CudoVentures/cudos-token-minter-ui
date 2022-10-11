export const styles = {
  parentHolder: {
    opacity: '1',
    transition: 'opacity .2s ease-in-out',
    height: '100%'
  },
  contentHolder: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    overflow: 'auto'
  },
  controlBtn: {
    marginTop: '30px',
    width: '200px',
    fontWeight: 700
  },
  logInControlBtn: {
    marginTop: '30px',
    fontWeight: 700
  },
} as const
