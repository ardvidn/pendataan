import { Column, Entity, Index } from "typeorm";

@Index("jns_status_kantor_pkey", ["kdStatKantor"], { unique: true })
@Entity("jns_status_kantor", { schema: "public" })
export class JnsStatusKantor {
  @Column("character", { primary: true, name: "kd_stat_kantor", length: 2 })
  kdStatKantor!: string;

  @Column("character varying", {
    name: "ket_stat_kantor",
    nullable: true,
    length: 30,
  })
  ketStatKantor!: string | null;
}
