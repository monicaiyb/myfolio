/* eslint-disable valid-typeof */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Paper,
  // Box, 
  // Menu,
  // MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import { Edit, Delete } from '@material-ui/icons';

const columns = [
  { id: "title", label: "Title", minWidth: 20 },
  { id: "link", label: "Project\u00a0Link", minWidth: 50 },
  {
    id: "category",
    label: "Category",
    minWidth: 20,
  },
  {
    id: "date",
    label: "Date\u00a0of\u00a0Completion",
    minWidth: 20,
  },
  {
    id: "team",
    label: "Team\u00a0Involved",
    minWidth: 30,
  },
  {
    id: "technologies",
    label: "Technologies\u00a0Used",
    minWidth: 50,
  },
  {
    id: "description",
    label: "Description",
    minWidth: 270,
  }, {
    id: "editIcon",
    label: "",
    minWidth: 10,
  }, {
    id: "deleteIcon",
    label: "",
    minWidth: 10,
  },
];

function createData(
  title,
  link,
  category,
  date,
  team,
  technologies,
  description,
  editIcon,
  deleteIcon
) {
  // const density = population / size;
  return { title, link, category, date, team, technologies, description, editIcon, deleteIcon };
}

const rows = [
  createData(
    "ICTAU",
    "https://ictau.ug/",
    "Digital Marketing",
    "2021-06-26",
    "Isaac Neuwelt,Paula,Ivan",
    "Adobe Photoshop,Adobe XD,WordPress",
    "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.", <Edit />, <Delete />
  ),
  createData(
    "Aboth Ministries",
    "https://ictau.ug/",
    "Digital Marketing",
    "2021-06-26",
    "Isaac Neuwelt,Paula,Ivan",
    "Adobe Photoshop,Adobe XD,WordPress",
    "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.", <Edit />, <Delete />
  ),
  createData(
    "Asili Fortune",
    "https://ictau.ug/",
    "Digital Marketing",
    "2021-06-26",
    "Isaac Neuwelt,Paula,Ivan",
    "Adobe Photoshop,Adobe XD,WordPress",
    "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.", <Edit />, <Delete />
  ),
  createData(
    "Neuwelt Portfolio",
    "https://ictau.ug/",
    "Digital Marketing",
    "2021-06-26",
    "Isaac Neuwelt,Paula,Ivan",
    "Adobe Photoshop,Adobe XD,WordPress",
    "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.", <Edit />, <Delete />
  ),
  createData(
    "GAP",
    "https://ictau.ug/",
    "Digital Marketing",
    "2021-06-26",
    "Isaac Neuwelt,Paula,Ivan",
    "Adobe Photoshop,Adobe XD,WordPress",
    "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.", <Edit />, <Delete />
  ),
  createData(
    "ICTAU",
    "https://ictau.ug/",
    "Digital Marketing",
    "2021-06-26",
    "Isaac Neuwelt,Paula,Ivan",
    "Adobe Photoshop,Adobe XD,WordPress",
    "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.", <Edit />, <Delete />
  ),
  createData(
    "ICTAU",
    "https://ictau.ug/",
    "Digital Marketing",
    "2021-06-26",
    "Isaac Neuwelt,Paula,Ivan",
    "Adobe Photoshop,Adobe XD,WordPress",
    "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.", <Edit />, <Delete />
  ),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleModify = (event, item) => {
    alert(`Hi ${item}!`, event.target);
  };

  return (
    <Container maxWidth="l" style={{ marginTop: 50 }}>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, fontWeight: "bold" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        const item = column.id;
                        return (
                          <TableCell key={column.id} align={column.align} onClick={()=>handleModify(item)}
                          >
                            {column.format && typeof value === "text"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
}
