import { Helmet } from 'react-helmet';

export default function CallJavaScript() {
    return (
        <Helmet>
            <script src="../../assets/js/main.js"></script>
        </Helmet>
    );
}
