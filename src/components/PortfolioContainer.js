import React from 'react';

const styles = {
  pageHeightStyle: {
    backgroundColor: "#660000"
  }
}

export default function PortfolioContainer({renderPage}) {


  return (
    <div className="vh-100" style={styles.pageHeightStyle}>
      {renderPage()}
    </div>
  );
}
