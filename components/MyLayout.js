import Header from './Header';

// Define the inline CSS style for the layout
const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD',
};

const Layout = (props) => (
   <div>
      {/* Link to external Bootstrap CSS */}
      <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
      />

      {/* Create a container div with the specified layout style */}
      <div style={layoutStyle}>
        {/* Include the Header component */}
        <Header />
        {/* Render the child components passed to Layout */}
        {props.children}
      </div>
  </div>
);

export default Layout;
