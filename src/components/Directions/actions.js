import {FETCH_ALL_DIR} from "./actionTypes";
import {PLATFORM_API, DIRECTIONS_API} from "../../config/api.config";

export const receiveAllDirs = dirs => {
  return {
    type: FETCH_ALL_DIR,
    dirs
  };
};

export const fetchDirs = () => {
  return dispatch => {
    const route = process.env.REACT_APP_DIRECTION_API
      + '?relationships=true';

    console.log(route)

    return fetch(route)
      .then(res => res.json())
      .then(data => dispatch( receiveAllDirs(data) ));
  };
};

export const sendDirs = direction => {
  return dispatch => {
    const  route = process.env.REACT_APP_DIRECTION_API;

    return fetch(route, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({
          title: direction.title,
          parent: direction.parent || undefined
      })
    })
        .then(res => res.json())
        .then(data => dispatch( fetchDirs() ));
  };
};

export const editDirs = direction => {
    return dispatch => {
        const  route = process.env.REACT_APP_DIRECTION_API + '/' + direction.id;

        return fetch(route, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'put',
            body: JSON.stringify({
                title: direction.title,
                parent: direction.parent || undefined
            })
        })
            .then(res => res.json())
            .then(data => dispatch( fetchDirs() ));
    };
};

export const deleteDirs = direction => {
    return dispatch => {
        const  route = process.env.REACT_APP_DIRECTION_API + '/' + direction;
        return fetch(route, {
            method: 'delete',
        })
            .then(res => res.json())
            .then(data => dispatch( fetchDirs() ));
    };
};


