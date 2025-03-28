import { Column, Entity, Index } from "typeorm";

@Index("adj_pkey", ["kdAdj"], { unique: true })
@Entity("adj", { schema: "public" })
export class Adj {
  @Column("character", { primary: true, name: "kd_adj", length: 2 })
  kdAdj!: string;

  @Column("character varying", { name: "nm_adj", length: 30 })
  nmAdj!: string;
}
