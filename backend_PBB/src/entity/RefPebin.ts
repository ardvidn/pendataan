import { Column, Entity, Index } from "typeorm";

@Index("ref_pebin_pkey", ["kdPebin"], { unique: true })
@Entity("ref_pebin", { schema: "public" })
export class RefPebin {
  @Column("character", { primary: true, name: "kd_pebin", length: 2 })
  kdPebin!: string;

  @Column("character varying", { name: "nm_pebin", nullable: true, length: 50 })
  nmPebin!: string | null;
}
