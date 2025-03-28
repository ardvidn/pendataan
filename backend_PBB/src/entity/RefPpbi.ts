import { Column, Entity, Index } from "typeorm";

@Index("ref_ppbi_pkey", ["kdPbi", "kdPebin", "kdPpbi"], { unique: true })
@Index("pbi_ppbi_fk", ["kdPbi", "kdPebin"], {})
@Entity("ref_ppbi", { schema: "public" })
export class RefPpbi {
  @Column("character", { primary: true, name: "kd_pebin", length: 2 })
  kdPebin!: string;

  @Column("character", { primary: true, name: "kd_pbi", length: 2 })
  kdPbi!: string;

  @Column("character", { primary: true, name: "kd_ppbi", length: 2 })
  kdPpbi!: string;

  @Column("character varying", { name: "nm_ppbi", nullable: true, length: 50 })
  nmPpbi!: string | null;
}
