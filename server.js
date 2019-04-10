import express from 'express';
import cors from 'cors';
import db from './models';
import eventsRoutes from './routes/events';
import healthRoutes from './routes/health';

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use('/api/health', healthRoutes);
app.use('/api/events', eventsRoutes);

app.use(function(request, response) {
  response
    .status(404)
    .json({error :'Not Found'});
});

app.use(function(error, request, response) {
  response
    .status(500)
    .json({error: error.message || error.error});
});

db.sequelize
  .sync()
  .then(() => {
    // eslint-disable-next-line
    app.listen(8000, () => console.log("App listening on port 8000!"));
  });

export default app;
