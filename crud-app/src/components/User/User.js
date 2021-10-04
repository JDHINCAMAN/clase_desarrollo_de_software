import React from 'react';
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, email: "homero.simpson@gmail.com", phoneNumber: "12345667", address: "Av Simpre Viva 123", firstName: "Homero", lastName: "Simpson" },
  { id: 2, email: "bart.simpson@gmail.com", phoneNumber: "12345667", address: "Av Simpre Viva 123", firstName: "Bart", lastName: "Simpson" },
  { id: 3, email: "marge.simpson@gmail.com", phoneNumber: "12345667", address: "Av Simpre Viva 123", firstName: "Marge", lastName: "Simpson" },
  { id: 4, email: "lisa.simpson@gmail.com", phoneNumber: "12345667", address: "Av Simpre Viva 123", firstName: "Lisa", lastName: "Simpson" },
  { id: 5, email: "maggy.simpson@gmail.com", phoneNumber: "12345667", address: "Av Simpre Viva 123", firstName: "Maggy", lastName: "Simpson" }
];

const User = () => {

  // constructor(props) {
  //   super(props);

    // this.state = {
    //   data: data,
    //   modalActualizar: false,
    //   modalInsertar: false,
    //   form: {
    //     id: "",
    //     email: "",
    //     phoneNumber: "",
    //     address: "",
    //     firstName: "",
    //     lastName: ""
    //   }
    // };
  // }

  // const [exampleState, setExampleState] = useState(
  //   {masterField: {
  //         fieldOne: "a",
  //         fieldTwo: {
  //            fieldTwoOne: "b",
  //            fieldTwoTwo: "c"
  //            }
  //         }
  //    });

//   setExampleState({...exampleState,  masterField: {
//     fieldOne: "c",
//     fieldTwo: {
//        fieldTwoOne: "d",
//        fieldTwoTwo: "e"
//        }
//     },
// });

  const [usuario, setUsuario] = React.useState({
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      email: "",
      phoneNumber: "",
      address: "",
      firstName: "",
      lastName: ""
    }
  });

  const handleChange = (e) => {
    setUsuario({...usuario,  form: {
      [e.target.name]: e.target.value,
      },
    });
  };

  const mostrarModalActualizar = (dato) => {

  };

  const cerrarModalActualizar = () => {
  };

  const mostrarModalInsertar = () => {
  };

  const cerrarModalInsertar = () => {
  };

  const editar = (dato) => {

  };

  const eliminar = (dato) => {

  };

  const insertar = () => {
    
  }

  return (
    <>
      <Container>
        <br />
        <Button color="success">Crear</Button>
        <br />
        <br />
        <Table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Dirección</th>
              <th>Telefóno</th>
              <th>Acción</th>
            </tr>
          </thead>

          <tbody>
            {usuario.data.map((dato) => (
              <tr key={dato.id}>
                <td>{dato.email}</td>
                <td>{dato.firstName}</td>
                <td>{dato.lastName}</td>
                <td>{dato.address}</td>
                <td>{dato.phoneNumber}</td>
                <td>
                  <Button
                    color="primary"
                    onClick={() => this.mostrarModalActualizar(dato)}
                  >
                    Editar
                  </Button>{" "}
                  <Button color="danger" onClick={() => this.eliminar(dato)}>Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal isOpen={usuario.modalActualizar}>

      </Modal>



      <Modal isOpen={usuario.modalInsertar}>
      <ModalHeader>
        <div><h3>Insertar Usuario</h3></div>
      </ModalHeader>

      <ModalBody>
        <FormGroup>
          <label>
          Id:
          </label>

          <input
          className="form-control"
          readOnly
          type="text"
          value={usuario.data.length + 1}
          />
        </FormGroup>
      </ModalBody>
        <ModalFooter>
          <Button
          color="primary"
          onClick={() => this.insertar()}
          >
          Insertar
          </Button>
          <Button
          className="btn btn-danger"
          onClick={() => this.cerrarModalInsertar()}
          >
          Cancelar
          </Button>
        </ModalFooter>
      </Modal> 
    </>
  );
}
export default User;
