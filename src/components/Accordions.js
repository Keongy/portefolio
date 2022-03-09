import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Accordions = ({ accordion }) => {


    return (
        <Accordion
            sx={{
                backgroundColor: "#42529b",
                color: '#edf9fe'
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography
                    sx={{
                        width: '80px'
                    }}
                >{accordion.year}</Typography>
                <Typography>{accordion.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {accordion.description}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default Accordions;