import { Column, Entity, Index } from "typeorm";

@Index("temp_max_bundel_pkey", ["kdKantor", "kdKanwil", "tempNoBundel", "tempThnBundel", "tempUrutBundel"], { unique: true })
@Index("t3_a6_fk", ["kdKantor", "kdKanwil"], {})
@Entity("temp_max_bundel", { schema: "public" })
export class TempMaxBundel {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { primary: true, name: "temp_thn_bundel", length: 4 })
  tempThnBundel!: string;

  @Column("character", { primary: true, name: "temp_no_bundel", length: 4 })
  tempNoBundel!: string;

  @Column("character", { primary: true, name: "temp_urut_bundel", length: 3 })
  tempUrutBundel!: string;
}
