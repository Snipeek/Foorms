import React, {useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, useSearchParams} from "react-router-dom";
import styles from './index.css';
import {v4 as genId} from 'uuid';
import classNames from 'classnames';
import {Item} from "@/Item";

const convert = (schema = []) => (
  schema.map(item => {
    if (item.options)
      item.options = item.options.map(value => ({
        name: (checked) => <Item checked={checked} value={value} />,
        value: '' + value,
      }));

    return item;
  })
)

const api = {
  list: ({ topic = '' }) => (
    fetch(`https://x8ki-letl-twmt.n7.xano.io/api:pmXl60qa/answers?topic=${topic}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        const items = {};

        for (const item of res) {
          const topic = items[item.topic] = Object.assign({}, items[item.topic]);
          topic[item.question] = Object.assign({}, topic[item.question], { [item.user]: item });
        }

        return items;
      })
  ),
  push: ({ id, ...args }) => (
    fetch(`https://x8ki-letl-twmt.n7.xano.io/api:pmXl60qa/answers${id ? `/${id}` : ''}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ id, ...args }),
    })
      .then(res => res.json())
  ),
}

const App = ({ user }) => {
  const [args, set] = useSearchParams();

  const topic = args.get('topic');

  const items = convert(JSON.parse(args.get('schema') || '{}'));

  const [results, setResult] = useState(null);

  const onChange = (args) => {
    setResult(prev => {
      if (!(args.topic in prev)) prev[args.topic] = {};

      if (!(args.question in prev[args.topic])) prev[args.topic][args.question] = {};

      prev[args.topic][args.question][args.user] = args;

      return { ...prev };
    });

    api.push(args)
      .then(next => (
        setResult(prev => {
          prev[args.topic][args.question][args.user] = next;

          return { ...prev };
        })
      ));
  };

  useEffect(() => {
    api.list({ topic }).then(setResult);
  }, [topic]);

  if (!results) return null;

  const values = results[topic] = Object.assign({}, results[topic], {});

  return (
    <div className={styles.root}>
      <h1 children={topic} />
      {items.map(({ name: question, options: args }) => {
        const answers = values[question] = Object.assign({}, values[question]);
        const res = answers[user] || {};

        const counts = Object.values(answers).reduce((acc, { answer }) => {
          acc[answer] = (acc[answer] || 0) + 1;
          return acc;
        }, {})

        return (
          <div className={styles.items}>
            <h4 className={styles.name} children={question} />
            <div className={styles.item}>
              {args.map(item => (
                <div
                  className={styles.answer}
                  onClick={() => onChange({ ...res, user, topic, question, answer: item.value })}
                >
                  {item.name(res.answer === item.value)}
                  <span className={classNames(styles.count, counts[item.value] && styles.active)}>{counts[item.value] || 0}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const node = document.createElement('div');
document.body.appendChild(node);

let user = localStorage.getItem('user');

if (!user) {
  user = genId();
  localStorage.setItem('user', user);
}

createRoot(node).render(
  <BrowserRouter>
    <App user={user} />
  </BrowserRouter>
);
