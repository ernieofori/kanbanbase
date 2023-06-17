import React from 'react'
import { Card, CardContent, Typography} from '@material-ui/core'


const TrelloCard = ({cards}) => {
  
  return (
    <Card style={styles.card}>
      <CardContent>
        <Typography style={styles.title} color="textSecondary" gutterBottom component="p">
         {cards.text} 
        </Typography>
        <Typography style={styles.pos} color="textSecondary">
          {/* {meta} */}
        </Typography>
        <Typography variant="body2" component="p">
          {/* {desc} */}
        </Typography>
      </CardContent>
    </Card>
  )
}

const styles = {
  card: {
    width: '95%',
    margin: '8px auto'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
   margin: 3 
  },
  pos: {
    marginBottom: 12,
  }
}

export default TrelloCard