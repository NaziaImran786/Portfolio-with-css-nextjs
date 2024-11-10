import React from "react";
import Image from "next/image";
import Link from "next/link";

function Projects() {
  return (
    <>
      <div className="projectbottomDiv">
        <div className="projectskillDiv">
          <a
            href="https://github.com/NaziaImran786"
            target="_blank"
          >
             <Image
              src={"/images/3.png"}
              alt="periodic-table"
              height={280}
              width={300}
            />
          </a>
        </div>

        <div className="projectskillDiv">
          <a
            href="https://github.com/NaziaImran786"
            target="_blank"
          >
             <Image
              src={"/images/4.png"}
              alt="periodic-table"
              height={280}
              width={300}
            />
          </a>
        </div>

        <div className="projectskillDiv">
          <a
            href="https://github.com/NaziaImran786"
            target="_blank"
          >
            <video
              src={"/images/my-stopwatch.mp4"}
              controls
              muted
              loop
              id="videoDiv"
            ></video>
          </a>
        </div>
        </div>

        <div className="projectbottomDiv">  
        <div className="projectskillDiv" id="periodic-table">
          <a
            href="https://github.com/NaziaImran786"
            target="_blank"
          >
            <Image
              src={"/images/1.png"}
              alt="periodic-table"
              height={280}
              width={300}
            />
          </a>
        </div>

        <div className="projectskillDiv" id="todo-list">
          <a
            href="https://github.com/NaziaImran786"
            target="_blank"
          >
             <Image
              src={"/images/6.png"}
              alt="periodic-table"
              height={280}
              width={300}
            />
          </a>
        </div>

        <div className="projectskillDiv">
          <a
            href="https://github.com/NaziaImran786"
            target="_blank"
          >
             <Image
              src={"/images/5.png"}
              alt="periodic-table"
              height={280}
              width={300}
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Projects;
