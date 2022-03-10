import React, {useState} from 'react';
import { AppBar, Toolbar, Container} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile'
import dataSiteConfig from '../../assets/data/dataSiteConfig';

const styles = {
  root: {
    flexGrow: 1,
    background: 'rgb(46, 46, 46)',
  },
  toolbar:{
    justifyContent: 'space-between'
  }
}

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searching, setSearching] = useState(false)

  const desktop = useMediaQuery(theme => theme.breakpoints.up('md'));

  return (
    <div sx={styles.root}>
      <AppBar position="fixed">
        <Container fixed maxWidth='md' sx={styles.toolbar}>
          <Toolbar variant='dense' disableGutters sx={styles.toolbar}>
           { desktop ?
              <HeaderDesktop 
                dataSiteConfig={dataSiteConfig}
                menuItems={dataSiteConfig.menuItems}
                setMenuOpen={setMenuOpen}
                menuOpen={menuOpen}
                setCartOpen={setCartOpen}
                cartOpen={cartOpen}
                setSearching={setSearching}
                searching={searching}/>
              :
              <HeaderMobile 
                dataSiteConfig={dataSiteConfig}
                menuItems={dataSiteConfig.menuItems}
                setMenuOpen={setMenuOpen}
                menuOpen={menuOpen}
                setCartOpen={setCartOpen}
                cartOpen={cartOpen}
                setSearching={setSearching}
                searching={searching}/>
           }
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}