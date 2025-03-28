import { Column, Entity, Index } from "typeorm";

@Index("dat_op_sin_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut"], { unique: true })
@Index("opsin_jns_sin_fk", ["kdJnsSin"], {})
@Index("pegawai_op_sin_fk", ["nipPendata"], {})
@Entity("dat_op_sin", { schema: "public" })
export class DatOpSin {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "kd_blok", length: 3 })
  kdBlok!: string;

  @Column("character", { primary: true, name: "no_urut", length: 4 })
  noUrut!: string;

  @Column("character", { primary: true, name: "kd_jns_op", length: 1 })
  kdJnsOp!: string;

  @Column("character", { name: "kd_jns_sin", length: 2 })
  kdJnsSin!: string;

  @Column("character", { name: "nip_pendata", length: 18 })
  nipPendata!: string;

  @Column("character", { name: "nip_perekam", nullable: true, length: 18 })
  nipPerekam!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_pendataan",
    nullable: true,
  })
  tglPendataan!: Date | null;

  @Column("timestamp without time zone", {
    name: "tgl_perekaman",
    nullable: true,
  })
  tglPerekaman!: Date | null;
}
