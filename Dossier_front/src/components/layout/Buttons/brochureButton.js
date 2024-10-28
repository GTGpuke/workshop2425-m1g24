import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BrochureButton() { // Renommé en BrochureButton
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Télécharger notre documentation
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {"Télécharger notre documentation"}
          <Button onClick={handleClose} style={{ position: 'absolute', right: 16, top: 16 }}>X</Button>
        </DialogTitle>
        <DialogContent>
          <form>
            <DialogContentText>
              Veuillez remplir ce formulaire pour télécharger la documentation.
            </DialogContentText>
            <input type="text" placeholder="Nom" required style={{ display: 'block', margin: '8px 0' }} />
            <input type="text" placeholder="Prénom" required style={{ display: 'block', margin: '8px 0' }} />
            <input type="email" placeholder="Email" required style={{ display: 'block', margin: '8px 0' }} />
            <input type="tel" placeholder="Téléphone" required style={{ display: 'block', margin: '8px 0' }} />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button type="submit">Valider</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
