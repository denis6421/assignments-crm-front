import React, { Component } from "react";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


class EmployeeAssignmentsPopup extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount(){
      setTimeout(() => {
            this.setState({
                page_loaded:true
            })
      }, 20);
  }

  close = () => {
    this.setState({
        page_loaded:false
    })
    setTimeout(() => {
        this.props.closePopup();
    }, 300);
  };
  handleSelect = (m) => {
    this.props.setAssignment(m);
    this.close()
  };

  render() {
    const { assignments_list , system_text} = this.props;
    const {page_loaded} = this.state
    return (
      <div
      style ={{
          opacity:page_loaded  ? 1 : 0
      }}
      className="employee__page__assignments__suggestions">
        <section className="overlay"></section>
        <div className="employee__page__assignments__suggestions__content">
          <button type="button"
          className='employee__page__assignments__suggestions__close'
          onClick={() => this.close()}>
            <CloseOutlinedIcon />
          </button>
    <h3>{system_text.TEMPLATES}</h3>
          <ul>
            {assignments_list && assignments_list.length > 0
              ? assignments_list.map((m) => {
                  return (
                    <li
                      onClick={() => this.handleSelect(m)}
                      className="flex__start"
                      key={m._id}
                    >
                        <AddCircleOutlineIcon />
                      {m.title}
                    </li>
                  );
                })
              : "  "}
          </ul>
        </div>
      </div>
    );
  }
}

export default EmployeeAssignmentsPopup;
