import { Column, Entity, Index } from "typeorm";

@Index("rencana_pendataan_pkey", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "thnRenpend"], { unique: true })
@Index("d34_a4_fk", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi"], {})
@Entity("rencana_pendataan", { schema: "public" })
export class RencanaPendataan {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "thn_renpend", length: 4 })
  thnRenpend!: string;

  @Column("integer", { name: "jml_op_bumi_renpend", nullable: true })
  jmlOpBumiRenpend!: number | null;

  @Column("integer", { name: "jml_op_bng_renpend", nullable: true })
  jmlOpBngRenpend!: number | null;

  @Column("bigint", { name: "luas_bumi_renpend", nullable: true })
  luasBumiRenpend!: string | null;

  @Column("bigint", { name: "luas_bng_renpend", nullable: true })
  luasBngRenpend!: string | null;

  @Column("bigint", { name: "njop_bumi_renpend", nullable: true })
  njopBumiRenpend!: string | null;

  @Column("bigint", { name: "njop_bng_renpend", nullable: true })
  njopBngRenpend!: string | null;
}
