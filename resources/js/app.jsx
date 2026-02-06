import './bootstrap';
import '../css/app.css';
import { createRoot } from 'react-dom/client';
import TreeSellerApp from './components/TreeSellerApp';

const container = document.getElementById('app');

if (container) {
    createRoot(container).render(<TreeSellerApp />);
}
