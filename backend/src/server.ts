import { config } from 'dotenv';
import app from './app';

if (process.env.NODE_ENV !== "production") {
    config();
  }

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`SISTEMA DA FUNCIONANDO NA PORTA ${PORT}`)
})
