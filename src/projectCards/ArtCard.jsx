import { Paper, Typography } from "@material-ui/core";
import ProjectCard from "./ProjectCard";

export default function ArtCard({title, children}) {
    const colour = "cornflower blue"
    return (
        <ProjectCard title={title} colour={colour}>
            {children}
        </ProjectCard>
    );
}