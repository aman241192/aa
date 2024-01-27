import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const ClassSubjectsTable = ({ classSubjects }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Class</TableCell>
            <TableCell>Subject</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {classSubjects.map((classData, index) => (
            <React.Fragment key={index}>
              <TableRow className="class-row">
                <TableCell rowSpan={classData.subjects.length}>
                  Class {classData.class_id}
                </TableCell>
                <TableCell>{classData.subjects[0]}</TableCell>
              </TableRow>
              {classData.subjects.slice(1).map((subject, subIndex) => (
                <TableRow key={subIndex} className="class-row">
                  <TableCell>{subject}</TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const ShowTable = () => {
  const classSubjects = [
    { class_id: 1, subject_name: "Math" },
    { class_id: 1, subject_name: "Physics" },
    { class_id: 1, subject_name: "Chemistry" },
    { class_id: 1, subject_name: "Biology" },
    { class_id: 1, subject_name: "English" },
    { class_id: 2, subject_name: "History" },
    { class_id: 2, subject_name: "Geography" },
    { class_id: 2, subject_name: "Economics" },
    { class_id: 3, subject_name: "Computer Science" },
    { class_id: 3, subject_name: "Programming" },
    { class_id: 3, subject_name: "Database Management" },
    { class_id: 3, subject_name: "Networks" },
  ];

  // Group subjects by class_id
  const groupedSubjects = classSubjects.reduce((acc, subject) => {
    const existingClass = acc.find((c) => c.class_id === subject.class_id);
    if (existingClass) {
      existingClass.subjects.push(subject.subject_name);
    } else {
      acc.push({
        class_id: subject.class_id,
        subjects: [subject.subject_name],
      });
    }
    return acc;
  }, []);

  return (
    <div>
      <h1>Class Subjects</h1>
      <ClassSubjectsTable classSubjects={groupedSubjects} />
    </div>
  );
};

export default ShowTable;
