import { FC, useState } from "react";
import "./compentency.scss";

const CompetencyComponent: FC = () => {
  const [isActivecongrats, setisActivecongrats] = useState(false);
  const [competencyForm, setCompetencyForm] = useState({
    competencies: [
      { courseName: "", durationFrom: "", durationTo: "", certificate: "" },
    ],
  });

  const handleToggle = () => {
    setisActivecongrats(!isActivecongrats);
  };

  const handleChange = (index: number, field: string, value: string) => {
    const updatedCompetencies: any = [...competencyForm.competencies];
    updatedCompetencies[index][field] = value;
    setCompetencyForm({ competencies: updatedCompetencies });
  };

  const addCompetency = () => {
    setCompetencyForm((prevForm) => ({
      competencies: [
        ...prevForm.competencies,
        { courseName: "", durationFrom: "", durationTo: "", certificate: "" },
      ],
    }));
  };

  const removeCompetency = (index: number) => {
    const updatedCompetencies = [...competencyForm.competencies];
    updatedCompetencies.splice(index, 1);
    setCompetencyForm({ competencies: updatedCompetencies });
  };

  const handleSubmit = () => {
    console.log(competencyForm);
    handleToggle();
  };

  return (
    <div className="competency">
      {isActivecongrats && (
        <div className="modal-wrap">
          <div className="modal-content text-center">
            <div className="close-icon">
              <img
                src="../../../assets/images/close.svg"
                className="cursor-pointer"
                alt="closeIcon"
              />
            </div>
            <div className="congrats-img">
              <img
                src="../../../assets/images/congragulations.svg"
                alt="popup"
              />
            </div>
            <div className="congrats-title">Congratulations!</div>
            <div className="congrats-description">
              You have completed second step sucessfully and earned
              <span className="reward-points"> 20 </span>
              Points
            </div>
          </div>
        </div>
      )}

      <div className="form-container main-container">
        <form>
          <div>
            <div>
              {competencyForm.competencies.map((competency, index) => (
                <div key={index}>
                  <div className="flex-container">
                    <div>
                      <label className="label-style">Degree Name</label>
                      <input
                        type="text"
                        placeholder="Degree Name"
                        value={competency.courseName}
                        onChange={(e) =>
                          handleChange(index, "courseName", e.target.value)
                        }
                        className="input-style"
                      />
                    </div>
                    <div>
                      <label className="label-style">Upload Certificate</label>
                      <input
                        type="file"
                        id="certificate"
                        onChange={(e) =>
                          handleChange(index, "certificate", e.target.value)
                        }
                        className="input-style"
                      />
                    </div>
                  </div>
                  <div className="flex-container">
                    <div>
                      <label className="label-style">Duration From</label>
                      <input
                        type="date"
                        onChange={(e) =>
                          handleChange(index, "durationFrom", e.target.value)
                        }
                        className="input-style"
                      />
                    </div>
                    <div>
                      <label className="label-style">Duration To</label>
                      <input
                        type="date"
                        onChange={(e) =>
                          handleChange(index, "durationTo", e.target.value)
                        }
                        className="input-style"
                      />
                    </div>
                  </div>
                  <hr className="my-4 w-full" />
                  {competencyForm.competencies.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeCompetency(index)}
                      className="remove-button"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
          <button type="button" onClick={addCompetency} className="add-button">
            + Add
          </button>
          <div className="submit-container">
            <button
              type="button"
              onClick={handleSubmit}
              className="submit-button"
            >
              Update
            </button>
          </div>
        </form>
        <div className="navigate-actions">
          <a href="/information/personal-info">&lt; Previous</a>
          <a href="/information/work-history">Next &gt;</a>
        </div>
      </div>
    </div>
  );
};

export default CompetencyComponent;
