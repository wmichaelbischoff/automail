insert into orders
(
topinput,
bottominput,
platecolor,
textcolor,
isreviewed,
shipping,
isfulfilled,
user_id
)
values(
${topinput},
${bottominput},
${platecolor},
${textcolor},
${isreviewed},
${shipping},
${isfulfilled},
${user_id}
)
returning order_id