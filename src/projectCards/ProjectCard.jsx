import { Paper, Typography } from "@material-ui/core";

export default function ProjectCard({title, children, colour}) {
        
    const style ={
        padding: '6px 16px',
        color: colour
    }
    return (
        <Paper 
        elevation={3} 
        style={style}>
            <Typography variant="h6" component="h1">
                {title}
            </Typography>
            <Typography>{children}</Typography>
        </Paper>
    );
}