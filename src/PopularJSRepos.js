import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PopularJSRepos() {
  const [repos, setRepos] = useState([]);

  // TODO : load the repos into state when the component mounts

  return (
    <div>
      <h2>Popular JS repos</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Stars</th>
          </tr>
        </thead>
        <tbody>
          {repos.map((r) => (
            <tr key={r.id}>
              <td>
                <a target="blank" href={r.html_url}>
                  {r.name}
                </a>
              </td>
              <td>{r.stargazers_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
