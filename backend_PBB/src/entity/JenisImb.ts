import { Column, Entity, Index } from "typeorm";

@Index("jenis_imb_pkey", ["kdJnsImb"], { unique: true })
@Entity("jenis_imb", { schema: "public" })
export class JenisImb {
  @Column("character", { primary: true, name: "kd_jns_imb", length: 2 })
  kdJnsImb!: string;

  @Column("character varying", { name: "ket_imb", nullable: true, length: 30 })
  ketImb!: string | null;
}
