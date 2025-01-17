import React from 'react'
import styled from 'styled-components';
import SectionTitle from '../Common/SectionTitle';
import DailyTask from './DailyTask';

const tasks = [
    {
        id: 1,
        title: "Create a new template",
        status: false,
        color: "#86C0FF"
    },
    {
        id: 2,
        title: "Daily Meeting with team",
        status: false,
        color: "#FF5DFF"
    },
    {
        id: 3,
        title: "Pay for rent",
        status: true,
        color: "#6277AC"
    },
    {
        id: 4,
        title: "Check emails",
        status: false,
        color: "#1269FB"
    },
    {
        id: 5,
        title: "Lunch with Emma",
        status: true,
        color: "#86C0FF"
    },
    {
        id: 6,
        title: "Meditation",
        status: false,
        color: "#1269FB"
    },
]

const TodayTasks = ({color, title, status}: any) => {
  return (
    <CategoryLayout>
      <SectionTitle>Today's Tasks</SectionTitle>
      <CategoryCardsLayout>
        {tasks.map(task=><DailyTask key={task.id} title={task.title} status={task.status} color={task.color} />)}
      </CategoryCardsLayout>
    </CategoryLayout>
  )
}

export default TodayTasks


const CategoryLayout = styled.div(({ theme }) => ({
    width: "50%",
    marginTop: theme.customSpacing.rem(3)
    // flexGrow: 1,
  }));
  
  const CategoryCardsLayout = styled.div(({ theme }) => ({
    // width: "100%",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    paddingRight: theme.customSpacing.rem(1),
    justifyContent: "space-between",
  }));