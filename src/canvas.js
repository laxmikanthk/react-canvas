import React from 'react';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
//import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

class CanvasComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dialogOpen: false,
        };
    }
    componentDidMount(props) {
        const ctx = this.refs.canvas.getContext('2d');
         //ctx.drawImage(cheese, 0, 0)
        ctx.fillRect(0,0, 600, 600);
                
        var image = new Image();
        image.onload = function () {
            ctx.drawImage(image, 0, 0);
        }
        image.src = "https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781";

        
        const canvasObj = document.querySelector('canvas')
        canvasObj.addEventListener('mousedown', function(e) {
            const rect = canvasObj.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            console.log("x: " + x + " y: " + y)
            // this.setState({
            //     dialogOpen: true
            // });
        })
    }

    
    
    handleOpenDialog = () => {
        this.setState({
            dialogOpen: true
        });
    };

    handleCloseDialog = () => {
        this.setState({
            dialogOpen: false
        });
    };
    
    render() {
        return (
            <div>
                <canvas ref="canvas" width={600} height={400}/>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >
                <DialogTitle id="alert-dialog-title">{"Tag Name"}</DialogTitle>
                <DialogContent>
                    <TextField
                    id="outlined-basic"
                    label="Outlined"
                    margin="normal"
                    variant="outlined"
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                    Close
                    </Button>
                    {/* <Button
                    onClick={() => this.handleTag(item.id)}
                    color="primary"
                    autoFocus
                    >
                    Tag
                    </Button> */}
                </DialogActions>
            </Dialog>
        </div>
        );
    }
}
export default CanvasComponent