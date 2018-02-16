\connect template1;
DROP DATABASE IF EXISTS surges;
CREATE DATABASE surges;
\connect surges;

CREATE TABLE surgebyzip (
  id SERIAL PRIMARY KEY,
  zipcode INTEGER NOT NULL,
  surge DECIMAL(6, 5) NOT NULL,
  updated INTEGER NOT NULL
  );

\COPY surgebyzip(zipcode, surge, updated) FROM 'fakeData/fareData.txt' DELIMITER ',' CSV HEADER;
