import { Column, Entity, Index } from "typeorm";

@Index("srt_himbauan_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKantor", "kdKanwil", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noSrtHimbauan", "noUrut"], { unique: true })
@Index("g11_1_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKantor", "kdKanwil", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noSrtHimbauan", "noUrut"], { unique: true })
@Entity("srt_himbauan", { schema: "public" })
export class SrtHimbauan {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { primary: true, name: "no_srt_himbauan", length: 30 })
  noSrtHimbauan!: string;

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

  @Column("timestamp without time zone", { name: "tgl_terbit_srt_himbauan" })
  tglTerbitSrtHimbauan!: Date;

  @Column("timestamp without time zone", {
    name: "tgl_cetak_srt_himbauan",
    default: () => "statement_timestamp()",
  })
  tglCetakSrtHimbauan!: Date;

  @Column("character", { name: "nip_pencetak_srt_himbauan", length: 18 })
  nipPencetakSrtHimbauan!: string;
}
