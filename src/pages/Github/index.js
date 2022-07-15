import React, { useEffect, useState } from "react";
import FetchData from "../../components/Fetch";
import "./index.css";

const Github = () => {
  const [isRepo, setisRepo] = useState([]);

  useEffect(() => {
    repoData();
  }, []);

  const repoData = async () => {
    const repo = await FetchData();
    setisRepo(repo);
  };

  return (
    <div>
      {isRepo.items &&
        isRepo.items.map((repo) => (
          <div className="repo_container" key={repo.id}>
              {repo.owner.avatar_url && (
            <div className="avatar">
              <img
                src={repo.owner.avatar_url}
                alt=""
                style={{ height: "80px" }}
              />
            </div>
              )}
            <div className="text">
                {repo.name && (
              <div className="repo_title">
                  <span>{repo.name}</span>
              </div>
                )}
                {repo.description && (
              <span className="desc">Desc: {repo.description}</span>
                )}
              <div className="Starring">
                  {repo.stargazers_count && (
                <div className="subtitle">
                  <i className="fa fa-star pr-1" />
                  <span>Stars: {repo.stargazers_count}</span>
                </div>
                  )}
                  {repo.open_issues_count && (
                <div className="subtitle">
                  <span>Issues: {repo.open_issues_count}</span>
                </div>
                  )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Github;
