import React from "react";
import Button from "@material-ui/core/Button";

class Avatar extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>PAOLO</h1>
        </div>
      
        <Button variant="contained" color="bg-primary">
          EDITAR
        </Button>
      </div>
    );
  }
}

export { Avatar };
