// SQL 쿼리 빌더
class QueryBuilder {
  constructor(table) {
    this.table = table;
    this.conditions = [];
  }

  where(field, value) {
    this.conditions.push({ field, value });
    return this;
  }

  build() {
    let query = `SELECT * FROM ${this.table}`;
    
    if (this.conditions.length > 0) {
      query += ' WHERE ';
      const whereClauses = this.conditions.map(c => 
        `${c.field} = '${c.value}'`
      );
      query += whereClauses.join(' AND ');
    }
    
    return query;
  }
}

// 사용 예시
const query = new QueryBuilder('users')
  .where('email', 'user@example.com')
  .build();

console.log(query);
