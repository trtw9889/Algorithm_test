-- 코드를 입력하세요
SELECT
COUNT(USER_ID) AS USERS
FROM USER_INFO
WHERE JOINED >= '2021-01-01' AND JOINED <= '2021-12-31'
AND AGE BETWEEN 20 AND 29