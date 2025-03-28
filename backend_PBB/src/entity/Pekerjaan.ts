import { Column, Entity, Index } from "typeorm";

@Index("pekerjaan_pkey", ["kdPekerjaan"], { unique: true })
@Entity("pekerjaan", { schema: "public" })
export class Pekerjaan {
  @Column("character", { primary: true, name: "kd_pekerjaan", length: 2 })
  kdPekerjaan!: string;

  @Column("character varying", { name: "nm_pekerjaan", length: 30 })
  nmPekerjaan!: string;

  @Column("character", { name: "status_pekerjaan", nullable: true, length: 1 })
  statusPekerjaan!: string | null;
}
