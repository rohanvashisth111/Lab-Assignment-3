import StudentRow from "./StudentRow";

function StudentTable({ students, updateScore, removeStudent }) {
  if (!students.length) {
    return (
      <div className="empty-state">
        <span className="empty-icon">📋</span>
        <p>No students yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
            <th>Progress</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <StudentRow
              key={student.id}
              index={index + 1}
              student={student}
              updateScore={updateScore}
              removeStudent={removeStudent}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;