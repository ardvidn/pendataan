import { Column, Entity, Index } from "typeorm";

@Index("stat_fin_report_pkey", ["kdStatFinRep"], { unique: true })
@Entity("stat_fin_report", { schema: "public" })
export class StatFinReport {
  @Column("character", { primary: true, name: "kd_stat_fin_rep", length: 2 })
  kdStatFinRep!: string;

  @Column("character varying", {
    name: "ket_stat_fin_rep",
    nullable: true,
    length: 30,
  })
  ketStatFinRep!: string | null;
}
