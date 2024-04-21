"use client";
import React from "react";
import HeaderVod from "./components/headerVod";

export default function ErrorVod() {
  return (
    <React.Fragment>
      <HeaderVod />
      <div className="container">
        <h2>There is error</h2>
        <a href="/vod">Back TO Home</a>
      </div>
    </React.Fragment>
  );
}
