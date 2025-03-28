import { Column, Entity, Index } from "typeorm";

@Index("ref_pbi_pkey", ["kdPbi", "kdPebin"], { unique: true })
@Index("ref_pebin_pbi_fk", ["kdPebin"], {})
@Entity("ref_pbi", { schema: "public" })
export class RefPbi {
  @Column("character", { primary: true, name: "kd_pebin", length: 2 })
  kdPebin!: string;

  @Column("character", { primary: true, name: "kd_pbi", length: 2 })
  kdPbi!: string;

  @Column("character varying", { name: "nm_pbi", nullable: true, length: 50 })
  nmPbi!: string | null;
}
